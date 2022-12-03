/// <reference types="react-scripts" />

interface Business {
  id: string;
  operatingName: string;
  legalName: string;
  email: string;
  phone: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zipCode: string;
    state: string;
    country: string;
  };
  website: string;
  settings: {
    defaultTaxRate: 0.0;
    defaultCurrency: string;
    taxId: string;
    businesType: any;
    industry: string;
    logoUrl: string;
  };
  styling: {
    logoUrl: string;
    faviconUrl: string;
    primaryColor: string;
    secondaryColor: "#FFFFFF";
    metadata: any;
  };
  documentSettings: {
    sendReceipts: boolean;
    sendReminders: boolean;
    reminderDays: number[];
    alertOverdue: boolean;
    alertOverdueDays: number[];
  };
  paymentSettings: {
    paymentOnlineEnabled: boolean;
    paymentMethods: any;
    paymentProviders: any;
    defaultPaymentMethod: any;
    defaultPaymentProvider: any;
    defaultPaymentTerms: any;
  };
  ownerUserId: string;
  metadata: any;
}
