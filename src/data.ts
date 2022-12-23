interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'a',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
    {
      id: 'uuid2',
      source: 'b',
      amount: 1500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid3',
      source: 'c',
      amount: 1200,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
  ],
};
