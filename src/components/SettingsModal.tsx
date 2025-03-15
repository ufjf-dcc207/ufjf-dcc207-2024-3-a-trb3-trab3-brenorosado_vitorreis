import "../css/SettingsModal.css"; 

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
         {

            
         }
      </div>
    </div>
  );
}
