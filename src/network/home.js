import ajax from "@/network/ajax";

export function getHomeMultidata(){
  return ajax.get(
    //'home/multidata',
    'backend/backend.json',
    {})
}
