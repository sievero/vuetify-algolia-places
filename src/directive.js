export const AlgoliaPlacesDirective = (directiveOptions = {}) => {
  return {
    bind(el, binding, vnode) {
      console.log('==== BIND ==== ');
      const options = Object.assign({}, directiveOptions, binding.value);
      const autocomplete = vnode.componentInstance;

      console.log({ el, options, vnode, autocomplete });

      autocomplete.singleLine = true;
      autocomplete.returnObject = true;
      autocomplete.itemText = 'value';
      autocomplete.appendIcon = 'location_on';
    },
    inserted(el, binding, vnode) {
      console.log('==== INSERTED ==== ');
      const options = Object.assign({}, directiveOptions, binding.value);
      const autocomplete = vnode.componentInstance;

      console.log({ el, options, vnode, autocomplete });
    },
    update(el, binding, vnode) {
      console.log('==== update ==== ');
      const options = Object.assign({}, directiveOptions, binding.value);
      const autocomplete = vnode.componentInstance;

      console.log({ el, options, vnode, autocomplete });
    },
    componentUpdated(el, binding, vnode) {
      console.log('==== componentUpdated ==== ');
      const options = Object.assign({}, directiveOptions, binding.value);
      const autocomplete = vnode.componentInstance;

      console.log({ el, options, vnode, autocomplete });
    },
    unbind(el, binding, vnode) {
      console.log('==== unbind ==== ');
      const options = Object.assign({}, directiveOptions, binding.value);
      const autocomplete = vnode.componentInstance;

      console.log({ el, options, vnode, autocomplete });
    },
  };
};
