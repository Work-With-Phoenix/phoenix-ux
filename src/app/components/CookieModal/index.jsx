"use client"
import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '@/utils/cookieUtils';

function CookieConsentBanner({ onAccept }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentStatus = getCookie('cookieConsent');
    if (consentStatus !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie('cookieConsent', 'true', { expires: 365 });
    onAccept();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setCookie('cookieConsent', 'false', { expires: 365 });
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
          <div className="pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
            <p className="text-sm leading-6 text-gray-900">
              This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                cookie policy
              </a>
              .
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <button
                type="button"
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                onClick={handleAcceptAll}
              >
                Accept all
              </button>
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handleRejectAll}
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsentBanner;
