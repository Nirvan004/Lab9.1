import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(user.id);
    }
  };

  return (
    <div className="card flex flex-col items-center">
      {user.avatarUrl ? (
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
          {user.name[0]}
        </div>
      )}

      <h2 className="text-lg font-semibold">{user.name}</h2>

      {showEmail && <p className="text-gray-600">{user.email}</p>}
      {showRole && <p className="text-gray-500">{user.role}</p>}

      {onEdit && (
        <button
          onClick={handleEdit}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </button>
      )}

      {children && <div className="mt-2 w-full">{children}</div>}
    </div>
  );
};
