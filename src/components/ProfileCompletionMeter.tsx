import { AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProfileData {
  nome?: string;
  foto?: string;
  cidade?: string;
  instagram?: string;
  telefone?: string;
  email?: string;
  cpf?: string;
  dataNascimento?: string;
  idade?: string;
  categoria?: string;
  seguidores?: string;
  engajamentoMedio?: string;
  biografia?: string;
}

interface ProfileCompletionMeterProps {
  profileData: ProfileData;
  showDetails?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProfileCompletionMeter = ({ profileData, showDetails = false, size = 'md' }: ProfileCompletionMeterProps) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const calculateProfileCompletion = () => {
    const requiredFields = [
      { key: 'nome', label: 'Nome' },
      { key: 'foto', label: 'Foto' },
      { key: 'cidade', label: 'Cidade' },
      { key: 'instagram', label: 'Instagram' },
      { key: 'telefone', label: 'Telefone' },
      { key: 'email', label: 'E-mail' },
      { key: 'cpf', label: 'CPF' },
      { key: 'dataNascimento', label: 'Data de Nascimento' },
      { key: 'idade', label: 'Idade' },
      { key: 'categoria', label: 'Categoria' },
      { key: 'seguidores', label: 'Seguidores' },
      { key: 'engajamentoMedio', label: 'Taxa de Engajamento' },
      { key: 'biografia', label: 'Biografia' }
    ];

    const missing = requiredFields.filter(field => 
      !profileData[field.key as keyof ProfileData] || 
      String(profileData[field.key as keyof ProfileData]).trim() === ''
    ).map(field => field.label);

    setMissingFields(missing);
    const completed = requiredFields.length - missing.length;
    const percentage = (completed / requiredFields.length) * 100;
    setCompletionPercentage(percentage);
  };

  useEffect(() => {
    calculateProfileCompletion();
  }, [profileData]);

  const getCompletionColor = () => {
    if (completionPercentage >= 100) return 'text-green-500';
    if (completionPercentage >= 35) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = () => {
    if (completionPercentage >= 100) return '#22c55e';
    if (completionPercentage >= 35) return '#eab308';
    return '#ef4444';
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'w-20 h-20',
          image: 'w-16 h-16',
          text: 'text-xs'
        };
      case 'lg':
        return {
          container: 'w-48 h-48',
          image: 'w-40 h-40',
          text: 'text-lg'
        };
      default:
        return {
          container: 'w-40 h-40',
          image: 'w-32 h-32',
          text: 'text-base'
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div className="relative">
      {/* Círculo de progresso */}
      <div className={`relative ${sizeClasses.container} mx-auto`}>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className="transition-all duration-300"
            strokeWidth="4"
            stroke={getProgressColor()}
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - completionPercentage / 100)}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${sizeClasses.image} rounded-full bg-gray-200 overflow-hidden`}>
            {profileData.foto && (
              <img 
                src={profileData.foto} 
                alt={profileData.nome || 'Perfil'}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Indicador de completude */}
      <div className="mt-2 text-center">
        <p className={`${sizeClasses.text} font-semibold ${getCompletionColor()}`}>
          {completionPercentage.toFixed(0)}% completo
        </p>
        {showDetails && missingFields.length > 0 && (
          <div className="mt-2 p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-2 text-orange-700 mb-2">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">Campos pendentes:</p>
            </div>
            <ul className="text-sm text-orange-600 list-disc list-inside">
              {missingFields.map(field => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCompletionMeter; 