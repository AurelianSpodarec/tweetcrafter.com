function Avatar({ 
    size = 'md', 
    shape, 
    src, 
    alt
}: AvatarProps) {
    const avatarSizes = {
        sm: 20,
        md: 48,
        lg: 142.5,
    };

    const avatarSize = avatarSizes[size] || avatarSizes.md;

    if (!src) return <></>;
    return (
        <img 
            src={src}
            className={`${shape === 'rect' ? 'rounded-md' : 'rounded-full'} h-12 w-12 relative`}
            style={{ height: `${avatarSize}px`, width: `${avatarSize}px`, "border": "4px solid black" }}
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

