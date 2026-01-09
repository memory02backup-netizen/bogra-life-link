import { ArrowRight, ArrowLeft } from "lucide-react";

const bloodGroups = [
  { group: "O-", canGiveTo: "সবাইকে", canReceiveFrom: "O-", isUniversalDonor: true },
  { group: "O+", canGiveTo: "O+, A+, B+, AB+", canReceiveFrom: "O+, O-" },
  { group: "A-", canGiveTo: "A+, A-, AB+, AB-", canReceiveFrom: "A-, O-" },
  { group: "A+", canGiveTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
  { group: "B-", canGiveTo: "B+, B-, AB+, AB-", canReceiveFrom: "B-, O-" },
  { group: "B+", canGiveTo: "B+, AB+", canReceiveFrom: "B+, B-, O+, O-" },
  { group: "AB-", canGiveTo: "AB+, AB-", canReceiveFrom: "A-, B-, AB-, O-" },
  { group: "AB+", canGiveTo: "AB+", canReceiveFrom: "সবার থেকে", isUniversalReceiver: true },
];

const BloodGroupChart = () => {
  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-700 dark:text-green-400">ইউনিভার্সাল ডোনার (O-)</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-blue-700 dark:text-blue-400">ইউনিভার্সাল রিসিভার (AB+)</span>
        </div>
      </div>

      {/* Blood Group Cards */}
      <div className="grid grid-cols-2 gap-3">
        {bloodGroups.map((item) => (
          <div
            key={item.group}
            className={`blood-group-card ${
              item.isUniversalDonor 
                ? "ring-2 ring-green-500 ring-offset-2" 
                : item.isUniversalReceiver 
                ? "ring-2 ring-blue-500 ring-offset-2" 
                : ""
            }`}
          >
            <div className="blood-group-badge mx-auto mb-3">
              {item.group}
            </div>
            
            <div className="space-y-2 text-left">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">দিতে পারে</p>
                  <p className="text-xs text-foreground font-medium">{item.canGiveTo}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowLeft className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">নিতে পারে</p>
                  <p className="text-xs text-foreground font-medium">{item.canReceiveFrom}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodGroupChart;
