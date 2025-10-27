import DashboardLayout from "@/layouts/DashboardLayout";
import AuthGuard from "@/components/AuthGuard";

const TeamPage = () => {
  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Team Page</h1>
          <p className="text-lg text-gray-700 mb-6">Collaborate with your team members and manage team settings.</p>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Content coming soon! Team management features are under development.</p>
          </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
};

export default TeamPage;
