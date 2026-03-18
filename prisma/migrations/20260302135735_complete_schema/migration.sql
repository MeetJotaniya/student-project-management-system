-- CreateTable
CREATE TABLE "projectgroup" (
    "projectgroupid" SERIAL NOT NULL,
    "projecttypeid" INTEGER,
    "projectgroupname" VARCHAR(255),
    "projecttitle" VARCHAR(255),
    "projectarea" VARCHAR(255),
    "projectdescription" TEXT,
    "averagecpi" DOUBLE PRECISION,
    "description" TEXT,
    "convenerstaffid" INTEGER,
    "expertstaffid" INTEGER,
    "status" VARCHAR(50) DEFAULT 'pending',
    "maxmembers" INTEGER DEFAULT 4,
    "githuburl" VARCHAR(500),
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projectgroup_pkey" PRIMARY KEY ("projectgroupid")
);

-- CreateTable
CREATE TABLE "grouprequest" (
    "requestid" SERIAL NOT NULL,
    "groupname" VARCHAR(255) NOT NULL,
    "projecttitle" VARCHAR(255) NOT NULL,
    "projectarea" VARCHAR(255),
    "projectdescription" TEXT,
    "technologies" TEXT,
    "leaderid" INTEGER NOT NULL,
    "memberdata" TEXT NOT NULL,
    "status" VARCHAR(50) NOT NULL DEFAULT 'pending',
    "rejectionreason" TEXT,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvedby" INTEGER,

    CONSTRAINT "grouprequest_pkey" PRIMARY KEY ("requestid")
);

-- CreateTable
CREATE TABLE "projectgroupmember" (
    "projectgroupmemberid" SERIAL NOT NULL,
    "isgroupleader" BOOLEAN DEFAULT false,
    "studentcgpa" DOUBLE PRECISION,
    "projectgroupid" INTEGER,
    "studentid" INTEGER,
    "description" VARCHAR(255),
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projectgroupmember_pkey" PRIMARY KEY ("projectgroupmemberid")
);

-- CreateTable
CREATE TABLE "projectmeeting" (
    "projectmeetingid" SERIAL NOT NULL,
    "projectgroupid" INTEGER,
    "guidestaffid" INTEGER,
    "meetingdatetime" TIMESTAMP(6),
    "meetingpurpose" VARCHAR(255),
    "meetinglocation" VARCHAR(255),
    "meetingnotes" TEXT,
    "meetingstatus" VARCHAR(50),
    "meetingstatusdescription" TEXT,
    "meetingstatusdatetime" TIMESTAMP(6),
    "description" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projectmeeting_pkey" PRIMARY KEY ("projectmeetingid")
);

-- CreateTable
CREATE TABLE "projectmeetingattendance" (
    "projectmeetingattendanceid" SERIAL NOT NULL,
    "studentid" INTEGER,
    "projectmeetingid" INTEGER,
    "ispresent" BOOLEAN DEFAULT true,
    "attendanceremarks" TEXT,
    "description" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projectmeetingattendance_pkey" PRIMARY KEY ("projectmeetingattendanceid")
);

-- CreateTable
CREATE TABLE "projecttype" (
    "projecttypeid" SERIAL NOT NULL,
    "projecttypename" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projecttype_pkey" PRIMARY KEY ("projecttypeid")
);

-- CreateTable
CREATE TABLE "staff" (
    "staffid" SERIAL NOT NULL,
    "staffname" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) DEFAULT 'faculty',
    "description" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "registeredby" INTEGER,
    "profileimage" VARCHAR(500),

    CONSTRAINT "staff_pkey" PRIMARY KEY ("staffid")
);

-- CreateTable
CREATE TABLE "student" (
    "studentid" SERIAL NOT NULL,
    "studentname" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "registeredby" INTEGER,
    "profileimage" VARCHAR(500),

    CONSTRAINT "student_pkey" PRIMARY KEY ("studentid")
);

-- CreateTable
CREATE TABLE "activitylog" (
    "activityid" SERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "detail" TEXT NOT NULL,
    "userid" INTEGER,
    "userrole" VARCHAR(50),
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activitylog_pkey" PRIMARY KEY ("activityid")
);

-- CreateTable
CREATE TABLE "task" (
    "taskid" SERIAL NOT NULL,
    "projectgroupid" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "assignedto" INTEGER,
    "status" VARCHAR(50) NOT NULL DEFAULT 'TODO',
    "priority" VARCHAR(50) NOT NULL DEFAULT 'MEDIUM',
    "duedate" TIMESTAMP(6),
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "task_pkey" PRIMARY KEY ("taskid")
);

-- CreateTable
CREATE TABLE "grade" (
    "gradeid" SERIAL NOT NULL,
    "projectgroupid" INTEGER NOT NULL,
    "facultyid" INTEGER NOT NULL,
    "component" VARCHAR(50) NOT NULL,
    "marks" DOUBLE PRECISION NOT NULL,
    "maxmarks" DOUBLE PRECISION NOT NULL,
    "feedback" TEXT,
    "gradedat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grade_pkey" PRIMARY KEY ("gradeid")
);

-- CreateTable
CREATE TABLE "notification" (
    "notificationid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "userrole" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "isread" BOOLEAN NOT NULL DEFAULT false,
    "link" VARCHAR(500),
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("notificationid")
);

-- CreateTable
CREATE TABLE "announcement" (
    "announcementid" SERIAL NOT NULL,
    "authorid" INTEGER NOT NULL,
    "authorrole" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "targetrole" VARCHAR(50) NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "announcement_pkey" PRIMARY KEY ("announcementid")
);

-- CreateTable
CREATE TABLE "document" (
    "documentid" SERIAL NOT NULL,
    "projectgroupid" INTEGER NOT NULL,
    "uploadedby" INTEGER NOT NULL,
    "uploaderrole" VARCHAR(50) NOT NULL,
    "filename" VARCHAR(255) NOT NULL,
    "fileurl" VARCHAR(500) NOT NULL,
    "filetype" VARCHAR(100) NOT NULL,
    "filesize" INTEGER,
    "uploadedat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_pkey" PRIMARY KEY ("documentid")
);

-- CreateTable
CREATE TABLE "joinrequest" (
    "joinrequestid" SERIAL NOT NULL,
    "projectgroupid" INTEGER NOT NULL,
    "studentid" INTEGER NOT NULL,
    "message" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    "respondedby" INTEGER,
    "responsedate" TIMESTAMP(6),
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "joinrequest_pkey" PRIMARY KEY ("joinrequestid")
);

-- CreateIndex
CREATE INDEX "grouprequest_status_idx" ON "grouprequest"("status");

-- CreateIndex
CREATE INDEX "grouprequest_leaderid_idx" ON "grouprequest"("leaderid");

-- CreateIndex
CREATE UNIQUE INDEX "staff_email_key" ON "staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE INDEX "task_projectgroupid_idx" ON "task"("projectgroupid");

-- CreateIndex
CREATE INDEX "task_assignedto_idx" ON "task"("assignedto");

-- CreateIndex
CREATE INDEX "task_status_idx" ON "task"("status");

-- CreateIndex
CREATE INDEX "grade_projectgroupid_idx" ON "grade"("projectgroupid");

-- CreateIndex
CREATE INDEX "grade_facultyid_idx" ON "grade"("facultyid");

-- CreateIndex
CREATE UNIQUE INDEX "grade_projectgroupid_component_key" ON "grade"("projectgroupid", "component");

-- CreateIndex
CREATE INDEX "notification_userid_userrole_idx" ON "notification"("userid", "userrole");

-- CreateIndex
CREATE INDEX "notification_isread_idx" ON "notification"("isread");

-- CreateIndex
CREATE INDEX "notification_created_idx" ON "notification"("created");

-- CreateIndex
CREATE INDEX "announcement_targetrole_idx" ON "announcement"("targetrole");

-- CreateIndex
CREATE INDEX "announcement_created_idx" ON "announcement"("created");

-- CreateIndex
CREATE INDEX "document_projectgroupid_idx" ON "document"("projectgroupid");

-- CreateIndex
CREATE INDEX "document_uploadedat_idx" ON "document"("uploadedat");

-- CreateIndex
CREATE INDEX "joinrequest_status_idx" ON "joinrequest"("status");

-- CreateIndex
CREATE INDEX "joinrequest_studentid_idx" ON "joinrequest"("studentid");

-- CreateIndex
CREATE UNIQUE INDEX "joinrequest_projectgroupid_studentid_key" ON "joinrequest"("projectgroupid", "studentid");

-- AddForeignKey
ALTER TABLE "projectgroup" ADD CONSTRAINT "projectgroup_convenerstaffid_fkey" FOREIGN KEY ("convenerstaffid") REFERENCES "staff"("staffid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectgroup" ADD CONSTRAINT "projectgroup_expertstaffid_fkey" FOREIGN KEY ("expertstaffid") REFERENCES "staff"("staffid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectgroup" ADD CONSTRAINT "projectgroup_projecttypeid_fkey" FOREIGN KEY ("projecttypeid") REFERENCES "projecttype"("projecttypeid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grouprequest" ADD CONSTRAINT "grouprequest_leaderid_fkey" FOREIGN KEY ("leaderid") REFERENCES "student"("studentid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grouprequest" ADD CONSTRAINT "grouprequest_approvedby_fkey" FOREIGN KEY ("approvedby") REFERENCES "staff"("staffid") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectgroupmember" ADD CONSTRAINT "projectgroupmember_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectgroupmember" ADD CONSTRAINT "projectgroupmember_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("studentid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectmeeting" ADD CONSTRAINT "projectmeeting_guidestaffid_fkey" FOREIGN KEY ("guidestaffid") REFERENCES "staff"("staffid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectmeeting" ADD CONSTRAINT "projectmeeting_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectmeetingattendance" ADD CONSTRAINT "projectmeetingattendance_projectmeetingid_fkey" FOREIGN KEY ("projectmeetingid") REFERENCES "projectmeeting"("projectmeetingid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectmeetingattendance" ADD CONSTRAINT "projectmeetingattendance_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("studentid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_registeredby_fkey" FOREIGN KEY ("registeredby") REFERENCES "staff"("staffid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_registeredby_fkey" FOREIGN KEY ("registeredby") REFERENCES "staff"("staffid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_assignedto_fkey" FOREIGN KEY ("assignedto") REFERENCES "student"("studentid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_facultyid_fkey" FOREIGN KEY ("facultyid") REFERENCES "staff"("staffid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "joinrequest" ADD CONSTRAINT "joinrequest_projectgroupid_fkey" FOREIGN KEY ("projectgroupid") REFERENCES "projectgroup"("projectgroupid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "joinrequest" ADD CONSTRAINT "joinrequest_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("studentid") ON DELETE CASCADE ON UPDATE CASCADE;
