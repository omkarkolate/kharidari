import { Header, MessageCard } from "../../components/";

export function Successful() {
	return (
		<div>
			<Header />
				<MessageCard message={"Order Placed Succesfully"} />
		</div>
	);
}
