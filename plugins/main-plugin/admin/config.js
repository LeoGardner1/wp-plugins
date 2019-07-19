import pluginOne from "../../plugin-one/admin/config";

// List of store configs from each plugin
const pluginConfigs = [pluginOne];

// Generate the main store config using the list above
export default pluginConfigs.reduce(
  (config, { state, actions }) => {
    return {
      state: { ...config.state, ...state },
      actions: { ...config.actions, ...actions }
    };
  },
  { state: {}, actions: {} }
);
