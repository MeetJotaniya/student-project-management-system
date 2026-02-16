-- Add status field to projectgroup table
ALTER TABLE projectgroup ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'pending';

-- Create group_requests table for tracking approval workflow
CREATE TABLE IF NOT EXISTS grouprequest (
  requestid SERIAL PRIMARY KEY,
  groupname VARCHAR(255) NOT NULL,
  projecttitle VARCHAR(255) NOT NULL,
  projectarea VARCHAR(255),
  projectdescription TEXT,
  technologies TEXT,
  leaderid INT NOT NULL,
  memberdata JSONB NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  rejectionreason TEXT,
  created TIMESTAMP(6) DEFAULT NOW(),
  modified TIMESTAMP(6) DEFAULT NOW(),
  approvedby INT,
  FOREIGN KEY (leaderid) REFERENCES student(studentid) ON DELETE CASCADE,
  FOREIGN KEY (approvedby) REFERENCES staff(staffid) ON DELETE SET NULL
);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_grouprequest_status ON grouprequest(status);
CREATE INDEX IF NOT EXISTS idx_grouprequest_leaderid ON grouprequest(leaderid);
