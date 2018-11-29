// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Production KEYS
  //
  firebase: {
    apiKey: "AIzaSyATIzMNUiHv96bAblv2aJypLzD_l2_D79k",
    authDomain: "angularapp-localhostel.firebaseapp.com",
    databaseURL: "https://angularapp-localhostel.firebaseio.com",
    projectId: "angularapp-localhostel",
    storageBucket: "",
    messagingSenderId: "774711487490"
  }
  //
  // [END] ~> Production KEYS
  //

  //
  // STAGING KEYS
  //
  // firebase: {
  //   // apiKey: "AIzaSyAQ_7wc45BW6xH8lvgca0lFj_jv5o_smAM",
  //   apiKey: "AIzaSyATIzMNUiHv96bAblv2aJypLzD_l2_D79k",
  //   authDomain: "localhostel-staging.firebaseapp.com",
  //   databaseURL: "https://angularapp-localhostel.firebaseio.com", // projectId: "localhostel-staging",
  //   projectId: "angularapp-localhostel",
  //   storageBucket: "",
  //   messagingSenderId: "1008228053966"
  // }
  //
  // [END] ~> STAGING KEYS
  //
};
