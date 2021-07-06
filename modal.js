/**
 * Created by EvtykhRA on 01.07.2021.
 */
function _createModal(options) {
    const defaut_width = "600px";
    const modal = document.createElement('div')
    modal.classList.add('rmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close = 'true'>
        <div class="modal-window" style="width: ${options.width || defaut_width}">
            <div class="modal-header">
                <span class="modal-title">${options.title || "Окно"}</span>
                ${options.closable ? `<span class="but modal-close" data-close = 'true'>&times;</span>`: '' }
            </div>
            <div class="modal-body" data-content>
                <p> ${options.recContent || ""} </p>

            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button class="but quit" data-close = 'true'>Cancel</button>
            </div>
        </div>
    </div>
 `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 1000;
    const $modal = _createModal(options);
    let closing = false;
    let destroy = false;
    const modal = {
        open() {
            if (destroy) {
                return
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing=true;
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            },ANIMATION_SPEED)
        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)
        return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroy = true;
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html;
            }
    })
} 






