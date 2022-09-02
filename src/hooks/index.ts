import { getCurrentInstance, ref, computed } from 'vue'
import { getApi } from '@/utils/service'

const useHttpsFun = (fun: string) => {
  return getApi(fun)
}
