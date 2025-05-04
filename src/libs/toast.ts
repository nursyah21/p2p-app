type toastinfo = 'info' | 'error' | 'success' | 'warning'

export const toast = (message: string, type: toastinfo = 'info') => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="toast">
            <div class="alert alert-${type}">
              <span>${message}</span>
            </div>
          </div>`;
    const toastElement = wrapper.firstElementChild as HTMLElement;
    document.body.appendChild(toastElement);
    setTimeout(() => {
        toastElement.remove();
    }, 3000);
};

toast.success = (message: string) => toast(message, 'success');
toast.error = (message: string) => toast(message, 'error');
toast.warning = (message: string) => toast(message, 'warning');
toast.info = (message: string) => toast(message, 'info');