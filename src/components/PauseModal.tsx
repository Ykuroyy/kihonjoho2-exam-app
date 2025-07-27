'use client';

interface PauseModalProps {
  onResume: () => void;
}

export default function PauseModal({ onResume }: PauseModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-8">
        <div className="text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">試験を一時停止中</h2>
            <p className="text-gray-600">
              試験が一時停止されています。<br />
              準備ができたら「再開」ボタンを押してください。
            </p>
          </div>
          
          <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>注意:</strong> 一時停止中はタイマーが止まります。<br />
              実際の試験では一時停止はできません。
            </p>
          </div>
          
          <button
            onClick={onResume}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            試験を再開する
          </button>
        </div>
      </div>
    </div>
  );
}