function Avatar({ 
    size = 'md', 
    shape = 'rounded', 
    src, 
    alt 
}: AvatarProps) {
  const avatarSizes = {
    sm: 20,
    md: 48,
    lg: 133.5,
  };

  const avatarSize = avatarSizes[size] || avatarSizes.md;

  if (!src) return <></>;

  return (
    <img 
      src={src}
      className={`${shape === 'rounded' ? 'rounded-full' : ''} h-12 w-12`}
      style={{ height: `${avatarSize}px`, width: `${avatarSize}px` }}
      alt={alt}
    />
  );
}

export default Avatar;

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'rect';
  src?: string;
  alt?: string;
}

