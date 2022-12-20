function Avatar(props:AvatarProps) {
    return (
        <img src="https://pbs.twimg.com/profile_images/2320423543/9qheijpvtu9g5dteqvvw_400x400.jpeg" className="rounded-full h-12 w-12" />
    )
}

export default Avatar;

interface AvatarProps {
    image?: "default";
    size?: "md";
}