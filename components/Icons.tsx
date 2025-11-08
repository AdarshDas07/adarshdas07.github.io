
import React from 'react';

export const UserPlaceholderIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

export const GoogleScholarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.242 13.769L0 9.5l12-9.5 12 9.5-5.242 4.269C17.548 11.249 14.978 9 12 9s-5.548 2.249-6.758 4.769zM12 10c1.381 0 2.5 1.119 2.5 2.5S13.381 15 12 15s-2.5-1.119-2.5-2.5S10.619 10 12 10z"/>
    </svg>
);

export const OrcidIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.45 6.75H8.7V17.25H10.45V6.75ZM12.18 10.125C12.18 9.28477 12.8598 8.625 13.69 8.625C14.5302 8.625 15.19 9.28477 15.19 10.125C15.19 10.9652 14.5302 11.625 13.69 11.625C12.8598 11.625 12.18 10.9652 12.18 10.125ZM15.19 13.5H13.44V17.25H15.19V13.5Z" />
    </svg>
);

export const PubMedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.26 12H10.24V8.04h2.02c1.08 0 1.74.62 1.74 1.92 0 1.22-.64 1.94-1.74 2.04zm.12-2.82h-1.1v1.64h1.1c.54 0 .84-.36.84-.82s-.3-.82-.84-.82zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.74 11.33c-.2.2-.5.33-.82.33h-2.92v2.32h-2.02V8.02h3.6c1.64 0 2.66 1 2.66 2.72 0 1.3-.64 2.22-1.5 2.6z"/>
    </svg>
);

export const BlueskyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.95 21.492c-2.99 1.156-6.23-.33-7.86-3.71-1.93 1.93-1.92 5.06.02 6.99.02.02.04.03.06.05l-2.02-2.02c-1.48-2.07-1.89-4.52-1.01-6.72l-4.58-2.34c-.32-.16-.43-.57-.27-.89s.57-.43.89-.27l4.58 2.34c1.6-2.58 4.1-4.14 6.78-4.14 1.39 0 2.76.38 3.96 1.12l2.36-2.36c.28-.28.73-.28 1.01 0s.28.73 0 1.01l-2.36 2.36c2.4 2.19 3.12 5.56 1.94 8.52l2.12 1.69c.3.24.36.68.13.98s-.68.36-.98.13l-2.12-1.69c-.83 2.4-2.85 4.3-5.38 5.04zM11.13 6.67c-2.07 0-3.96 1.2-4.83 3.12l7.74 3.95c.5-3.3-1.48-6.19-4.57-7.03-.78-.2-1.58-.34-2.34-.34z"/>
    </svg>
);


export const BuildingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 21l8 0"></path>
        <path d="M12 17l0 4"></path>
        <path d="M7 4l10 0"></path>
        <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
        <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    </svg>
);

export const MedalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
        <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
    </svg>
);

export const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="15" cy="15" r="3" ></circle>
        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" ></path>
        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" ></path>
        <line x1="6" y1="9" x2="18" y2="9" ></line>
        <line x1="6" y1="12" x2="9" y2="12" ></line>
        <line x1="6" y1="15" x2="8" y2="15" ></line>
    </svg>
);
