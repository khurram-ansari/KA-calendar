import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginWithThirdParty } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginWithThirdParty('google');
    if (res) navigate('/calendar');
  };
  return (
    <div className="h-screen bg-secondary">
      <div className="container flex h-full items-center justify-center">
        <div className="login-card flex min-h-[200px] w-full max-w-[400px] flex-col items-center justify-center gap-8 rounded-xl bg-white px-8">
          <h1 className="text-3xl">Sign up or login</h1>

          <Button
            onClick={handleLogin}
            size={'lg'}
            className="bg-red-500 hover:bg-red-600"
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
