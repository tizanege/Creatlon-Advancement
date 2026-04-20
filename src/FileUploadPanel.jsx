import React from 'react';
import { ImagePlus, FileImage, X } from 'lucide-react';

const ACCEPT = 'image/png,image/jpeg,image/jpg,image/svg+xml,image/webp,application/pdf';

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUploadPanel() {
  const inputRef = React.useRef(null);
  const [files, setFiles] = React.useState([]);
  const [dragOver, setDragOver] = React.useState(false);

  const addFiles = React.useCallback((fileList) => {
    if (!fileList?.length) return;
    const next = Array.from(fileList);
    setFiles((prev) => {
      const seen = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const merged = [...prev];
      for (const f of next) {
        const key = `${f.name}-${f.size}`;
        if (!seen.has(key)) {
          seen.add(key);
          merged.push(f);
        }
      }
      return merged;
    });
  }, []);

  const onInputChange = (e) => {
    addFiles(e.target.files);
    e.target.value = '';
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };

  const removeAt = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="panel flex-col"
      style={{
        flex: 1,
        minWidth: 0,
        width: 'min(100%, 420px)',
        maxWidth: 440,
        zIndex: 5,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-color)',
        borderRight: '1px solid var(--border-color)',
      }}
    >
      <div
        className="flex-col"
        style={{
          flex: 1,
          minHeight: 0,
          margin: 12,
          padding: 24,
          gap: 0,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--panel-bg)',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border-color)',
          alignItems: 'stretch',
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          multiple
          onChange={onInputChange}
          style={{ display: 'none' }}
          aria-hidden
        />

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            type="button"
            className="btn-add-image"
            onClick={() => inputRef.current?.click()}
          >
            <ImagePlus size={22} strokeWidth={2} aria-hidden />
            Add Image
          </button>
        </div>

        <div
          role="region"
          aria-label="Upload area"
          onDragEnter={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
          }}
          onDrop={onDrop}
          className="flex-col"
          style={{
            flex: 1,
            marginTop: 24,
            padding: files.length === 0 ? 0 : 12,
            minHeight: files.length === 0 ? 200 : 0,
            borderRadius: 'var(--radius-md)',
            border: dragOver ? '2px dashed var(--primary-color)' : '1px solid transparent',
            background: dragOver ? 'rgba(251, 133, 70, 0.06)' : 'transparent',
            transition: 'background 0.2s, border-color 0.2s',
            alignItems: 'stretch',
            overflowY: 'auto',
          }}
        >
          {files.length === 0 ? null : (
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {files.map((file, index) => (
                <li
                  key={`${file.name}-${file.size}-${index}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-color)',
                    fontSize: '12px',
                  }}
                >
                  <FileImage size={16} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                  <span
                    style={{
                      flex: 1,
                      minWidth: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {file.name}
                  </span>
                  <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>{formatSize(file.size)}</span>
                  <button
                    type="button"
                    onClick={() => removeAt(index)}
                    aria-label={`Remove ${file.name}`}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: '4px',
                      cursor: 'pointer',
                      color: 'var(--text-muted)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
