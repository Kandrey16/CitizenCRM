export const citizenQueryKeys = {
  all: ['citizens'] as const,
  detail: (id: string) => ['citizen', id] as const,
  citizenGroup: (id: string) => ['citizen', id, 'citizen'] as const,
  documents: (id: string) => ['citizen', id, 'documents'] as const,
  career: (id: string) => ['citizen', id, 'career'] as const,
  family: (id: string) => ['citizen', id, 'family'] as const,
  assets: (id: string) => ['citizen', id, 'assets'] as const,
  medicine: (id: string) => ['citizen', id, 'medicine'] as const,
  additional: (id: string) => ['citizen', id, 'additional'] as const,
}
