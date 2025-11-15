/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface HelpModalProps {
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
    >
      <div 
        className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close help"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 id="help-modal-title" className="text-3xl font-bold text-center mb-6 text-gray-100">How to Use the Picture Workshop</h2>
        
        <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">1. Getting Started</h3>
                <p>Click the <span className="font-semibold text-white">'Upload an Image'</span> button or simply drag and drop a file onto the start screen to begin your project.</p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">2. The Editing Tabs</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li><strong className="text-white">Retouch:</strong> Select this tab, then click anywhere on your image to place a marker. Describe your edit in the text box (e.g., "remove this person" or "change shirt to green") and click 'Generate'.</li>
                    <li><strong className="text-white">Adjust:</strong> Apply global changes like blurring the background, enhancing details, or changing the lighting. Choose a preset or type a custom adjustment.</li>
                    <li><strong className="text-white">Filters:</strong> Give your photo an artistic style. Select from presets like 'Synthwave' or 'Anime', or create your own by describing it.</li>
                    <li><strong className="text-white">Crop:</strong> Frame your photo perfectly. Click and drag on the image to select an area, choose an aspect ratio if needed, and then click 'Apply Crop'.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">3. Main Controls</h3>
                 <ul className="space-y-3 list-disc list-inside">
                    <li><strong className="text-white">Undo/Redo:</strong> Easily step backward or forward through your edits.</li>
                    <li><strong className="text-white">Compare:</strong> Press and hold this button to quickly see the original, unedited image.</li>
                    <li><strong className="text-white">Reset:</strong> Revert all your changes and return to the image you first uploaded.</li>
                    <li><strong className="text-white">Upload New:</strong> Start over with a completely new image.</li>
                    <li><strong className="text-white">Download:</strong> Save your finished masterpiece to your computer.</li>
                </ul>
            </div>
        </div>

        <div className="mt-8 text-center">
            <button
                onClick={onClose}
                className="bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-3 px-8 text-lg rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95"
            >
                Got It!
            </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
