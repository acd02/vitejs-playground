export function getOppositeStatus(
  status: 'playground' | 'quokka'
): 'playground' | 'quokka' {
  return status === 'playground' ? 'quokka' : 'playground'
}
