class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length];
        int n = 0;

        for (int i = num_list.length - 1; i >= 0; i--) {
            answer[n] = num_list[i];
            n++;
        }

        return answer;
    }
}
