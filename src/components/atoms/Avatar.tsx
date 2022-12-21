function Avatar({ 
        size = 'md', 
        shape = 'rounded', 
        src, 
        alt 
    }: AvatarProps) {

    let avatarSize;
    switch(size) {
        case 'sm':
            avatarSize = 20;
            break;
        case 'md':
            avatarSize = 48;
            break;
        case 'lg':
            avatarSize = 133.5;
            break;
        default:
            avatarSize = 48;
    }
    if(src === "") return <></>
    if(src !== undefined)
    return (
        <img 
            src={src}
            className={`${shape === 'rounded' ? 'rounded-full' : ''} h-12 w-12`}
            style={{ height: `${avatarSize}px`, width: `${avatarSize}px` }}
            alt={alt}
        />
    )
}

export default Avatar;

interface AvatarProps {
    size?: 'sm' | 'md' | 'lg';
    shape?: "rounded" | 'rect';
    src?: string;
    alt?: string;
}