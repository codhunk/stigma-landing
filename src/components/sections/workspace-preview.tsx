"use client";

import * as React from "react";
import { Building2, GraduationCap, Users, QrCode } from "lucide-react";

export function WorkspacePreviewSection() {
  const [activeTab, setActiveTab] = React.useState<"superadmin" | "teacher" | "parent">("superadmin");

  return (
    <section className="w-full py-24 bg-slate-50/70 border-t border-slate-200/80" id="workspace-preview">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase">
            Persona Tailored Workspaces
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Precise Views for Every Academic Stakeholder
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Toggle through our primary persona dashboards to view contextual data density and role authorizations.
          </p>
        </div>

        {/* Tab Controller Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 w-full sm:w-fit mx-auto mb-10 sm:mb-12 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("superadmin")}
            className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "superadmin"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/60"
            }`}
          >
            <Building2 className="h-4 w-4 shrink-0" />
            <span>Super Admin Console</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("teacher")}
            className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "teacher"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/60"
            }`}
          >
            <GraduationCap className="h-4 w-4 shrink-0" />
            <span>Principal & Faculty</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("parent")}
            className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "parent"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/60"
            }`}
          >
            <Users className="h-4 w-4 shrink-0" />
            <span>Parent & Scholar App</span>
          </button>
        </div>

        {/* Tab Display Window */}
        <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-slate-200 transition-all">
          {/* VIEW 1: SUPER ADMIN */}
          {activeTab === "superadmin" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Central Governance Console
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Multi-Trust Federated Overview
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-mono font-medium border border-slate-200">
                    3 Campuses Active
                  </span>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    Provision New Tenant
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    Aggregate Student Population
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">6,920</div>
                  <div className="text-xs text-emerald-600 mt-1 font-semibold">
                    Across all regional entities
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    Total Consolidated Revenue YTD
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">₹4.82 Cr</div>
                  <div className="text-xs text-blue-600 mt-1 font-semibold">
                    96.4% reconciliation rate
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 sm:col-span-2 md:col-span-1">
                  <div className="text-xs text-slate-500 font-medium">
                    Security & Node Health
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">100.0%</div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    0 breaches · 0 cold starts
                  </div>
                </div>
              </div>

              {/* Table preview with responsive horizontal scrolling */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500 sm:hidden">
                  <span>Scroll horizontally to inspect details</span>
                  <span className="font-mono text-blue-600">→</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 scrollbar-thin">
                  <table className="w-full min-w-[620px] text-left text-sm text-slate-800">
                    <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3 sm:p-3.5">Tenant Name</th>
                        <th className="p-3 sm:p-3.5">Affiliation</th>
                        <th className="p-3 sm:p-3.5">Admissions Capacity</th>
                        <th className="p-3 sm:p-3.5">Monthly Sync</th>
                        <th className="p-3 sm:p-3.5 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">Green Valley Public Campus</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">CBSE Senior Secondary</td>
                        <td className="p-3 sm:p-3.5 text-slate-700">92% Filled (2,450/2,650)</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs text-slate-500">2 mins ago</td>
                        <td className="p-3 sm:p-3.5 text-right">
                          <span className="px-2.5 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-slate-900">Sunrise Degree College</td>
                        <td className="p-3 sm:p-3.5 text-slate-600">State Autonomous University</td>
                        <td className="p-3 sm:p-3.5 text-slate-700">88% Filled (4,120/4,600)</td>
                        <td className="p-3 sm:p-3.5 font-mono text-xs text-slate-500">8 mins ago</td>
                        <td className="p-3 sm:p-3.5 text-right">
                          <span className="px-2.5 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                            Healthy
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: PRINCIPAL & TEACHER */}
          {activeTab === "teacher" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Classroom Management
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Instructor Workbench · Dr. Sarah Jenkins
                  </h3>
                </div>
                <button
                  type="button"
                  className="px-4 py-2.5 sm:py-2 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors shadow-xs w-full sm:w-auto"
                >
                  <QrCode className="h-4 w-4" /> Start Instant Roll Call
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Next Period</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    Physics 101 · Room 304
                  </div>
                  <div className="text-xs text-blue-600 mt-1 font-semibold">
                    Starts in 14 minutes (42 students)
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    Assignments Pending Evaluation
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-amber-600 mt-1">
                    18 Submissions
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Thermodynamics Quiz #3
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 sm:col-span-2 md:col-span-1">
                  <div className="text-xs text-slate-500 font-medium">
                    Class Attendance Record
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-600 mt-1">
                    98.1% avg
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Grade 11-A Physics cohort
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: PARENT & SCHOLAR */}
          {activeTab === "parent" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Guardian & Scholar Portal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Student Dossier · Aarav Sharma (Grade 9-B)
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 self-start sm:self-auto">
                  Tuition Cleared
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    Current Term Attendance
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">96.2%</div>
                  <div className="text-xs text-emerald-600 mt-1 font-semibold">
                    Present today (Checked-in 07:58 AM)
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    Latest Test Result
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    A+ (94/100)
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Mathematics Periodic Assessment #2
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 sm:col-span-2 md:col-span-1">
                  <div className="text-xs text-slate-500 font-medium">
                    Upcoming Event
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    Parent-Teacher Meeting
                  </div>
                  <div className="text-xs text-blue-600 mt-1 font-semibold">
                    Saturday, 10:30 AM · Slot Confirmed
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
