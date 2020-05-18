
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Scrollbar from 'perfect-scrollbar';

var __install = function (Vue, options) {
    Vue.directive('scrollbar', {
        bind(el, binding, vnode) {
            if (typeof window === 'undefined' || el.$scrollbar) return;
            Vue.nextTick(() => {                
                el.style.position = 'relative';
                el.$scrollbar = new Scrollbar(el, Object.assign({}, options, binding.value));
            });

        },

        unbind(el) {
            if (el.$scrollbar) {
                el.$scrollbar.destroy();
                delete el.$scrollbar;
            }
        }
    });
}


if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(__install);
}

Scrollbar.install = __install;

export default Scrollbar;

export { Scrollbar };