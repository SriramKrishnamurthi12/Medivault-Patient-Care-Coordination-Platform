import logo from '@/assests/medivaultlogo.jpeg';

const MediVaultLogo = ({ size = 48, className = '' }) => {
  return (
    <img
      src={logo}
      alt="MediVault Logo"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default MediVaultLogo;