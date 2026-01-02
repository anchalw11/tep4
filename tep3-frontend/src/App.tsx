import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ProductionLandingPage from './components/ProductionLandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Questionnaire from './components/Questionnaire';
import PaymentFlow from './components/PaymentFlow';
import PaymentSuccess from './components/PaymentSuccess';
import CombinedMembershipPlans from './components/CombinedMembershipPlans';
import RiskManagementPage from './components/RiskManagementPage';
import MT5BotsPage from './components/MT5BotsPage';
import MT5Signup from './components/MT5Signup';
import MT5BotDashboard from './components/MT5BotDashboard';
import { UserProvider } from './contexts/UserContext';
import { AdminProvider } from './contexts/AdminContext';
import { TradingPlanProvider } from './contexts/TradingPlanContext';
import { SubscriptionProvider } from './contexts/SubscriptionContext';
import { SupabaseAuthProvider } from './contexts/SupabaseAuthContext';

function App() {
  return (
    <ErrorBoundary>
      <SupabaseAuthProvider>
        <UserProvider>
          <AdminProvider>
            <TradingPlanProvider>
              <SubscriptionProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<ProductionLandingPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/questionnaire" element={<Questionnaire />} />
                    <Route path="/payment" element={<PaymentFlow />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/plans" element={<CombinedMembershipPlans />} />
                    <Route path="/risk-management" element={<RiskManagementPage />} />
                    <Route path="/mt5-bots" element={<MT5BotsPage />} />
                    <Route path="/mt5-signup" element={<MT5Signup />} />
                    <Route path="/mt5-dashboard" element={<MT5BotDashboard />} />
                  </Routes>
                </Router>
              </SubscriptionProvider>
            </TradingPlanProvider>
          </AdminProvider>
        </UserProvider>
      </SupabaseAuthProvider>
    </ErrorBoundary>
  );
}

export default App;
