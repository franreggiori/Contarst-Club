export type Membership = {
  id: string;
  name: string;
  sessions: string;
  priceLabel: string;
  features: string[];
  guestPass: string;
  privateDiscount: string;
};

export const memberships: Membership[] = [
  {
    id: 'starter',
    name: 'Starter',
    sessions: '4/mes',
    priceLabel: 'USD 99/mes',
    features: ['Acceso multi-sede', 'Prioridad estándar de turnos'],
    guestPass: '1 guest pass/mes',
    privateDiscount: '5%'
  },
  {
    id: 'core',
    name: 'Core',
    sessions: '8/mes',
    priceLabel: 'USD 169/mes',
    features: ['Acceso multi-sede', 'Prioridad alta de turnos'],
    guestPass: '2 guest pass/mes',
    privateDiscount: '10%'
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    sessions: 'Ilimitado',
    priceLabel: 'USD 239/mes',
    features: ['Acceso multi-sede total', 'Máxima prioridad de turnos'],
    guestPass: '4 guest pass/mes',
    privateDiscount: '15%'
  }
];
