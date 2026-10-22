//! BimCraft browser edition entry point (eframe web runner on wasm32).

#[cfg(not(target_arch = "wasm32"))]
fn main() {
    // The browser edition only builds for wasm32; desktop users run the
    // `bimcraft` app instead. This stub keeps `cargo check` happy on native.
    eprintln!("bimcraft-web is the wasm browser edition; build with: trunk build (see BUILDING.md)");
    eprintln!("For the desktop app run: cargo run -p bimcraft");
}

#[cfg(target_arch = "wasm32")]
use bimcraft_ui_egui::BimcraftApp;

/// Thin eframe shell delegating to the shared UI crate (same as desktop).
#[cfg(target_arch = "wasm32")]
struct Shell {
    inner: BimcraftApp,
}

#[cfg(target_arch = "wasm32")]
impl eframe::App for Shell {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        self.inner.update(ctx);
    }
}

#[cfg(target_arch = "wasm32")]
fn main() {
    console_error_panic_hook::once();
    use wasm_bindgen::JsCast;
    let web_options = eframe::WebOptions::default();
    wasm_bindgen_futures::spawn_local(async move {
        let document = web_sys::window().expect("no window").document().expect("no document");
        let canvas = document
            .get_element_by_id("bimcraft_canvas")
            .expect("missing #bimcraft_canvas")
            .dyn_into::<web_sys::HtmlElement>()
            .expect("canvas is not an HtmlElement");
        let app_creator = Box::new(|_cc: &eframe::CreationContext<'_>| {
            let inner = BimcraftApp::new();
            Ok(Box::new(Shell { inner }) as Box<dyn eframe::App>)
        });
        if let Err(e) = eframe::WebRunner::new().start(canvas, web_options, app_creator).await {
            log::error!("eframe web start failed: {e:?}");
        }
    });
}
