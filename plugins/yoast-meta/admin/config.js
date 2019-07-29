import { post } from "axios";

export default {
  state: {
    yoast: {
      settings: window.frontity.plugins.yoast.settings
    }
  },
  actions: {
    yoast: {
      save: async ({ state }) => {
        console.log("saving");
        const data = new window.FormData();
        data.append("action", "frontity_save_frontity_yoast_settings");
        data.append("data", JSON.stringify(state.yoast.settings));
        const res = await post(window.ajaxurl, data);
        console.log("saved");
        console.log(res);
      },
      activate: ({ state, actions }) => {
        state.yoast.settings.isActive = true;
        actions.yoast.save();
      },
      deactivate: ({ state, actions }) => {
        state.yoast.settings.isActive = false;
        actions.yoast.save();
      }
    }
  }
};
