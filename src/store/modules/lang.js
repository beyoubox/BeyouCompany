let state = {
  langKey: 'cn'
};

const mutations = {
  langKey(state, value) {
    state.langKey = value;
  },
};

const getters = {
  langKey: state => state.langKey
};

export default {
  state,
  mutations,
  actions: {},
  getters
};
