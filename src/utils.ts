export type Status = 'playground' | 'quokka'

export function getOppositeStatus(status: Status): Status {
  return status === 'playground' ? 'quokka' : 'playground'
}
