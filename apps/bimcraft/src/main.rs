//! BimCraft desktop entry point (eframe/glow).

use bimcraft_ui_egui::BimcraftApp;

/// Thin eframe shell delegating to the shared UI crate.
struct Shell {
    inner: BimcraftApp,
}

impl eframe::App for Shell {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        self.inner.update(ctx);
    }
}

fn main() -> Result<(), eframe::Error> {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default().with_title("BimCraft").with_inner_size([1440.0, 900.0]).with_min_inner_size([800.0, 500.0]),
        ..Default::default()
    };
    eframe::run_native("BimCraft", options, Box::new(|_cc| Ok(Box::new(Shell { inner: BimcraftApp::new() }))))
}
