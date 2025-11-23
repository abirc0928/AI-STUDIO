const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "Please confirm your action.",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  showConfirm = true
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl p-6 text-center shadow-lg">
        
        <h2 className="text-lg font-semibold mb-3 text-white">{title}</h2>

        <p className="text-white mb-5">{message}</p>

        <div className="flex justify-center gap-4">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
          >
            {cancelLabel}
          </button>

          {showConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
