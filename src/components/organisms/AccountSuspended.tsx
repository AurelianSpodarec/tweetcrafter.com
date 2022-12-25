import Avatar from "../atoms/Avatar";

function AccountSuspended() {
    return (
        <div>

            <Avatar />
            @elonmusk
            <div>
                <h1>Account suspended</h1>
                <p>Twitter suspends accounts that violate the Twitter Rules. <span className="text-skin-accent">Learn more</span></p>
            </div>

        </div>
    )
}

export default AccountSuspended;