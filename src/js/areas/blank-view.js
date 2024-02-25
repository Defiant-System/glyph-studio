
// glyphr.blankView

{
	init() {
		// fast references
		this.els = {
			el: window.find(`.blank-view`),
			content: window.find("content"),
		};

		this.dispatch({ type: "init-blank-view" });
	},
	dispatch(event) {
		let APP = glyphr,
			Self = APP.blankView,
			el;
		// console.log(event);
		switch (event.type) {
			case "init-blank-view":
				// get settings, if any
				let xList = $.xmlFromString(`<Recents/>`);
				let xSamples = window.bluePrint.selectSingleNode(`//Samples`);

				Self.xRecent = window.settings.getItem("recents") || xList.documentElement;
				// add recent files in to data-section
				xSamples.parentNode.append(Self.xRecent);

				// render blank view
				window.render({
					template: "blank-view",
					match: `//Data`,
					target: Self.els.el,
				});
				break;
			case "hide-blank-view":
				//  change class name of content element
				Self.els.content.removeClass("show-blank-view");
				break;
			case "from-clipboard":
				// TODO
				break;
			case "select-sample":
				APP.dispatch({ type: "load-sample" });
				break;
			case "select-recent-file":
				break;
		}
	}
}
