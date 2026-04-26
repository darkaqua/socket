

export type ClientProps = {
	url: string;
	reconnect?: boolean;
	reconnectIntents?: number;
	reconnectInterval?: number;
	silent?: boolean;
	protocols?: string[];
};

export type ClientMutable = {
	connect: () => Promise<void>;
	emit: (
		event: string,
		message?: unknown,
		response?: (message?: unknown) => void,
	) => void;
	on: (
		event: "connected" | "disconnected" | "error" | string,
		callback: (data?: unknown) => void,
	) => () => void;
	close: () => void;
};