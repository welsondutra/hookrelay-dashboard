export type DeliveryStatus = 'pending' | 'delivered' | 'failed';

export interface Endpoint {
  id: string;
  url: string;
  description: string | null;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

/** Only the response to creating an endpoint carries the signing secret. */
export interface CreatedEndpoint extends Endpoint {
  secret: string;
}

export interface Delivery {
  id: string;
  eventId: string;
  endpointId: string;
  status: DeliveryStatus;
  attempts: number;
  nextAttemptAt: string | null;
  lastStatusCode: number | null;
  lastError: string | null;
  deliveredAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IngestedEvent {
  id: string;
  type: string;
  deliveries: number;
}
