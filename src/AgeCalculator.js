import { useState } from "react";

function AgeCalculator({ birthDate }) {
  if (!birthDate) {
    return (
      <div className="results">
        <div>
          <span className="dash">--</span> Years
        </div>
        <div>
          <div>
            <span className="dash">--</span> Months
          </div>
        </div>
        <div>
          <div>
            <span className="dash">--</span> Days
          </div>
        </div>
      </div>
    );
  }
  let today = new Date();

  const timeDiff = Math.abs(today - birthDate);
  const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const diffDays = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="results">
      <div>
        <span className="res-color">{diffYears}</span> Years
      </div>
      <div>
        <div>
          <span className="res-color">{diffMonths}</span> Months
        </div>
      </div>
      <div>
        <div>
          <span className="res-color">{diffDays}</span> Days
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
