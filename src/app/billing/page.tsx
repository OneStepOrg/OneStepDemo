import DashboardLayout from "@/layouts/DashboardLayout";
import AuthGuard from "@/components/AuthGuard";

const BillingPage = () => {
  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Billing Page</h1>
          <p className="text-lg text-gray-700 mb-6">Manage your billing information and payment methods here.</p>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Content coming soon! We are setting up secure billing options for you.</p>
          </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
};

export default BillingPage;
