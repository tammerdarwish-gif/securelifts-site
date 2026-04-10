"use client";

type PDFPreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  title: string;
};

export default function PDFPreviewModal({
  isOpen,
  onClose,
  pdfPath,
  title,
}: PDFPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h3 className="pr-4 text-lg font-semibold text-gray-900">{title}</h3>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-xl font-semibold text-gray-700 transition hover:bg-gray-100"
            aria-label="Close PDF preview"
          >
            ×
          </button>
        </div>

        <div className="flex-1 bg-gray-100">
          <iframe
            src={pdfPath}
            title={title}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}