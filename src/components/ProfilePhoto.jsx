import { useState } from "react";
import portfolio from "../data/portfolio";
import "./ProfilePhoto.css";

export default function ProfilePhoto({ size = "md" }) {
  const [errored, setErrored] = useState(!portfolio.hasProfilePhoto);

  const showPlaceholder = errored || !portfolio.hasProfilePhoto;

  return (
    <div className={`profile-photo profile-photo--${size}`}>
      <div className="profile-photo__ring" aria-hidden="true" />
      {showPlaceholder ? (
        <div className="profile-photo__placeholder" role="img" aria-label={`Profile photo placeholder for ${portfolio.name}`}>
          <span className="mono">{portfolio.initials}</span>
          <span className="profile-photo__hint mono">photo coming soon</span>
        </div>
      ) : (
        <img
          src={portfolio.profilePhoto}
          alt={`Portrait of ${portfolio.name}`}
          className="profile-photo__img"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
