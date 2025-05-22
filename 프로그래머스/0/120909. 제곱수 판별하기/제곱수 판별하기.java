class Solution {
    public int solution(int n) {
        int answer = 0;
        double root = Math.sqrt(n);
        
        if(root == (int)root){
            answer = 1;
        }else{
            answer = 2;
        }
        
        return answer;
    }
}