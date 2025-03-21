function Modal({titulo,txtBtn01,txtBtn02, texto, onClickBtn01, onClickBtn02, onClickBtnClose}) {
    return (
        <div class="modal modal-dialog-centered" tabIndex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{titulo}</h5>
                       {onClickBtnClose && <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>} 
                    </div>
                    <div class="modal-body">
                        <p>{texto}</p>
                    </div>
                    <div class="modal-footer">
                        { onClickBtn02 && <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickBtn02}>{txtBtn02}</button>}
                        { onClickBtn01 && <button type="button" class="btn btn-primary" onClick={onClickBtn01}>{txtBtn01}</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;

