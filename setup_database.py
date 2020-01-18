def find_paren(split_list):
    for index, word in enumerate(split_list):
        if word[0] == "(":
            return index


with open("FireDispatchSC", "r") as file:
    for line in file:
        split_line = line.split()
        if split_line[5] == "FIRE,":
            #print(split_line[5:])
            paren_index = find_paren(split_line)
            address = split_line[6:paren_index]
            time = split_line[1:3]
            #print(address)
            #print(time)
            address_str = " ".join(address)
            time_str = " ".join(time)

            print(address_str + " ----- " + time_str)

