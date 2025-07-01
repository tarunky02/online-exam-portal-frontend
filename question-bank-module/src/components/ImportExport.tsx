import React, { useState } from 'react';

const ImportExport: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleImport = async () => {
        if (!file) {
            setMessage('Please select a file to import.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/api/questions/import', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('File imported successfully!');
            } else {
                setMessage('Failed to import file.');
            }
        } catch (error) {
            setMessage('Error importing file: ' + error.message);
        }
    };

    const handleExport = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions/export', {
                method: 'GET',
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'questions_export.json';
                document.body.appendChild(a);
                a.click();
                a.remove();
                setMessage('File exported successfully!');
            } else {
                setMessage('Failed to export file.');
            }
        } catch (error) {
            setMessage('Error exporting file: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Import/Export Questions</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleImport}>Import Questions</button>
            <button onClick={handleExport}>Export Questions</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ImportExport;