class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[2];
        int 홀수 = 0;
        int 짝수 = 0;
        
        for(int num : num_list){
            if(num % 2 == 0){
                짝수++;
            }else{
                홀수++;
            }
        }
        
        answer[0] = 짝수;
        answer[1] = 홀수;
        
        return answer;
    }
}